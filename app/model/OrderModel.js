Ext.define("appka.model.OrderModel", {
    extend: "Ext.data.Model",  
    config: {        
        fields: [
            { name: 'component', type: 'string' },
            { name: 'price', type: 'float' },
            { name: 'count', type: 'integer' }
        ]
    }
});
