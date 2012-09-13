Ext.define("appka.model.ListElement", {
    extend: "Ext.data.Model",  
    config: {        
        fields: [
            { name: 'component', type: 'string' },
            { name: 'price', type: 'float' }
        ]
    }
});
