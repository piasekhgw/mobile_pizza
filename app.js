Ext.application({
    name: "appka",
    views: ["PageContainer", "JList", "MainPanel", "OrderedItem", "OrderedItems", "OrderForm"],
    models: ["ListElement", "OrderModel"],
    stores: ["Sources", "Order"],
    controllers: ["List"],
    
    launch: function () {
        var mainPanel = Ext.create("appka.view.MainPanel");
        Ext.Viewport.add(mainPanel);               
    }

});
