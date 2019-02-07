redux 練習
===
參考程式導實驗計畫第二期 - redux 課程
# 解決問題
- 當元件層級變複雜時，跨組件狀態不易管理
    - 透過全域狀態管理：初始化先訂閱更新狀態的行為(setState)，在每次需要變更時調用。
    - 使用 HOC 將訂閱行為相關程式碼獨立出來(connect)。
    
# 優化
- 在每次設置時，如果給錯參數則會導致全域狀態被覆蓋(尤其會發生在多人開發)。
    - 將給參數改為發指令的方式(dispatch)
- 預設用字串造成除錯困難
    - 改用變數管理每個 action type
- 一個狀態變更可能有多個參數，散落在組件內難以維護
    - 統一用函式管理並在需要時呼叫

- 用 reducer 處理 action -> store 的邏輯

# 到這邊為止在沒用 redux 的狀況下已完成狀態管理，那麼進一步使用 redux 後可以再優化的地方：
- 訂閱與通知狀態管理部分不需自行手動實作(Provider, createStore)
- connect 部分不需自行實作(mapStateToProps)。
- 方便結合多組 reducer 並有各自的代稱(combineReducers)
- 把 dispatch 包起來，在組件內就一樣用 props, 好處是不因導入 redux 而對組件的內部寫法有改變(mapDispatchToProps)。
