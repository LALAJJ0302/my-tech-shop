const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// --- 1. MySQL 連線設定 ---
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '', // XAMPP 預設通常為空
  database: 'portfolio_db'
});

db.connect(err => {
  if (err) {
    console.error('❌ MySQL 連線失敗:', err.message);
  } else {
    console.log('✅ 成功連上 MySQL 資料庫: portfolio_db');
  }
});

// --- 2. 產品介面 (READ) ---
// 獲取所有產品供首頁分類顯示
app.get('/api/projects', (req, res) => {
  const sql = "SELECT * FROM projects";
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
});

// --- 3. 購物車介面 (CRUD) ---

// [READ] 獲取購物車內容 (含關聯查詢取得產品名稱與價格)
app.get('/api/cart', (req, res) => {
  const sql = `
    SELECT cart.id, projects.title, projects.price, cart.quantity 
    FROM cart 
    JOIN projects ON cart.project_id = projects.id
  `;
  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
});

// [CREATE] 加入購物車
app.post('/api/cart', (req, res) => {
  const { project_id } = req.body;
  
  // 檢查購物車是否已有該商品
  db.query("SELECT * FROM cart WHERE project_id = ?", [project_id], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });

    if (rows.length > 0) {
      // 如果已有，更新數量 +1 (Update 邏輯的一環)
      db.query("UPDATE cart SET quantity = quantity + 1 WHERE project_id = ?", [project_id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ success: true, message: "數量已增加" });
      });
    } else {
      // 如果沒有，新增一筆紀錄
      db.query("INSERT INTO cart (project_id, quantity) VALUES (?, 1)", [project_id], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ success: true, id: result.insertId });
      });
    }
  });
});

// [UPDATE] 修改購物車數量 (手動加減)
app.put('/api/cart/:id', (req, res) => {
  const { quantity } = req.body;
  const { id } = req.params;
  
  const sql = "UPDATE cart SET quantity = ? WHERE id = ?";
  db.query(sql, [quantity, id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true, message: "數量更新成功" });
  });
});

// [DELETE] 移除購物車項目
app.delete('/api/cart/:id', (req, res) => {
  const { id } = req.params;
  
  const sql = "DELETE FROM cart WHERE id = ?";
  db.query(sql, [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ success: true, message: "商品已從購物車移除" });
  });
});

// --- 4. 啟動伺服器 ---
const PORT = 5001;
app.listen(PORT, () => {
  console.log(`🚀 後端伺服器運行中: http://localhost:${PORT}`);
});