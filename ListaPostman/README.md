# Testes de API com JsonPlaceholder usando Postman

Este projeto utiliza a API **JsonPlaceholder** para realizar testes de operações CRUD (_Create, Read, Update, Delete_) por meio do **Postman**. Foram implementados e validados diferentes cenários de sucesso e falha para garantir a qualidade das interações com a API.

---

## 🎯 Objetivo do Projeto
O objetivo é validar endpoints RESTful da API JsonPlaceholder através de testes que abrangem cenários reais de uso e falhas planejadas. Este projeto integra as práticas aprendidas na matéria de **Qualidade de Software** pelo mestre **Sr Vitinho**.

---

## 📋 Funcionalidades Testadas
Os testes foram organizados nas seguintes categorias de operações:

### **1. GET**
- **GettingAResource**: Obtém um recurso específico com base em um ID válido.  
  **Exemplo:** `GET /posts/1`  
  **Resultado esperado:** Recurso retornado com sucesso.

- **ListeningAllResources**: Retorna a lista de todos os recursos disponíveis.  
  **Exemplo:** `GET /posts`  
  **Resultado esperado:** Lista completa de recursos retornada.

- **NoListeningAllResources**: Simula um erro ao tentar acessar um recurso inexistente.  
  **Exemplo:** `GET /invalid-endpoint`  
  **Resultado esperado:** Código de erro retornado (404).  

### **2. POST**
- **CreateResource**: Cria um novo recurso na API.  
  **Exemplo:** `POST /posts`  
  **Corpo da requisição:**  
  ```json
  {
    "title": "Novo Post",
    "body": "Conteúdo do post",
    "userId": 1
  }

  ### **3. PUT**
- **UpdateResource**: Atualiza um recurso existente com dados válidos. 
  **Exemplo:** `PUT /posts/1`  
  **Corpo da requisição:**  
  ```json
{
  "title": "Post Atualizado",
  "body": "Conteúdo atualizado",
  "userId": 1
}
Resultado esperado: Recurso atualizado com sucesso.

### **NoUpdateResource**
Simula um erro ao tentar atualizar um recurso inexistente.  
**Exemplo:** `PUT /posts/invalid-id`  
**Resultado esperado:** Código de erro retornado (404).

---

### **4. DELETE**
- **DeleteResource**: Remove um recurso existente com base no ID.  
  **Exemplo:** `DELETE /posts/1`  
  **Resultado esperado:** Recurso deletado com sucesso (200).

---

### **Environments**
Foi utilizado um Enviroment com o nome da variável URL e o Initial Value https://jsonplaceholder.typicode.com/posts

---


## ✅ Resultados dos Testes
Os testes foram executados no **Postman**, e os resultados foram validados conforme os seguintes critérios:

| Teste                 | Endpoint               | Status Esperado | Resultado   |
|-----------------------|------------------------|-----------------|-------------|
| GettingAResource      | `/posts/1`            | 200 OK          | ✅ Sucesso   |
| ListeningAllResources | `/posts`              | 200 OK          | ✅ Sucesso   |
| NoListeningAllResources | `/invalid-endpoint`  | 404 Not Found   | ✅ Sucesso*  |
| CreateResource        | `/posts`              | 201 Created     | ✅ Sucesso   |
| UpdateResource        | `/posts/1`            | 200 OK          | ✅ Sucesso   |
| NoUpdateResource      | `/posts/invalid-id`   | 404 Not Found   | ✅ Sucesso*  |
| DeleteResource        | `/posts/1`            | 200 OK          | ✅ Sucesso   |

> *Os testes marcados como "Sucesso" mesmo com status de erro (404) foram projetados para validar cenários de falha esperada.

---

## 🚀 Como Executar
1. Clone este repositório.
2. Importe o arquivo de coleção do Postman disponível no projeto.
3. Configure os testes no Postman para utilizar o ambiente `https://jsonplaceholder.typicode.com`.
4. Execute os testes individualmente ou em lote para validar os resultados.

---

## 📚 Referências
- [JsonPlaceholder API Documentation](https://jsonplaceholder.typicode.com/)
- [Postman Documentation](https://learning.postman.com/)
