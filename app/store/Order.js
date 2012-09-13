Ext.define("appka.store.Order", {
    extend: "Ext.data.Store",
    xtype: "orderstore",
    config: {
        model: "appka.model.OrderModel"
    }
})
