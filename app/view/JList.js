Ext.define("appka.view.JList", {
    extend: "Ext.dataview.List",
    xtype: "jlist",
    id: 'main-list',    
    config: {
        ui: "round",
        itemTpl: '<div style="float: left">{component}</div><div style="float: right">{price}&nbsp;zł</div>',
        store: {
            xtype: "sourcesstore",
        }
    }
});
