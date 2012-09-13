Ext.define("appka.view.OrderedItems", {
    extend: "Ext.DataView",
    xtype: "ordereditems",
    id: "orders",    
    config: {
        // layout: "hbox",
        width: "100%",                
        store: {
            xtype: "orderstore",    
        },
        useComponents: true,
        defaultType: 'ordereditem',
    }
})
