```markdown
# 📘 API – Controle de Gastos

## 🔗 Base URL
http://localhost:3000

---

## 👤 Usuários

### ➕ Criar usuário
POST /users
```json
{
  "nome": "Wilson",
  "email": "wilson@email.com",
  "senha": "123456"
}
```

### 📄 Listar usuários
GET /users

---

## 🗂️ Categorias

### ➕ Criar categoria
POST /categories
```json
{
  "nome": "Alimentação",
  "usuarioId": 1
}
```

### 📄 Listar categorias
GET /categories

### ✏️ Atualizar categoria
PUT /categories/1
```json
{
  "nome": "Transporte"
}
```

### ❌ Deletar categoria
DELETE /categories/1

---

## 💸 Despesas

### ➕ Criar despesa
POST /expenses
```json
{
  "valor": 150.75,
  "data": "2024-07-01",
  "usuarioId": 1,
  "categoriaId": 1
}
```

### 📄 Listar despesas
GET /expenses

### ✏️ Atualizar despesa
PUT /expenses/1
```json
{
  "valor": 200.00,
  "data": "2024-07-02",
  "categoriaId": 2
}
```

### ❌ Deletar despesa
DELETE /expenses/1

---

## 💰 Receitas

### ➕ Criar receita
POST /incomes
```json
{
  "valor": 3000.00,
  "data": "2024-07-01",
  "usuarioId": 1
}
```

### 📄 Listar receitas
GET /incomes

### ✏️ Atualizar receita
PUT /incomes/1
```json
{
  "valor": 3500.00,
  "data": "2024-07-05"
}
```

### ❌ Deletar receita
DELETE /incomes/1

---

## 📊 Relatórios

### 📈 Resumo mensal
GET /relatorios/resumo?mes=7&ano=2024&usuarioId=1

### 🧾 Gastos por categoria
GET /relatorios/categorias?mes=7&ano=2024&usuarioId=1
```
