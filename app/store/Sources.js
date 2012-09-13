Ext.define("appka.store.Sources", {
    extend: "Ext.data.Store",
    xtype: "sourcesstore", 
    requires: ["Ext.data.reader.Xml"],   
    config: {     
        autoLoad: true,   
        proxy: {
            type: "ajax",
            url: "files/components.xml",
            reader: {
                type: "xml",
                record: "item",
                rootProperty: "items",
                model: "appka.model.ListElement",
            }
        }
    }
});
