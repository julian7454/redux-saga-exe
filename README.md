# redux-saga-exe
## 什麼是 saga
### 滿足特殊條件的 LLT(Long lived transaction)
長時間的 transaction，通常會把正在 transaction 中的 object lock 住。
問題：
- 失敗率
- delay
可以被拆成許多相互獨立的 subtransaction的集合:
t_1~t_n。
假如任何一個 saga 中的 subtransaction: t_i 單獨執行了，
應該要有一個 compensating transaction c_i 可以將它 undo。

如果全部都執行成功(Successful saga)：
t_1, t_2…., t_n
失敗的話：
t_1, t_2…., t_n, c_n…, c_1
