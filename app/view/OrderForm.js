Ext.define("appka.view.OrderForm", {
    extend: "Ext.form.Panel",
    xtype: "orderform",
    requires: ["Ext.field.Text", "Ext.field.Number", "Ext.Button"],
    config: {        
        items: [
            {
                xtype: 'numberfield',
                name : 'phone',
                label: 'Telefon'
            },
            {
                xtype: 'textfield',
                name : 'address',
                label: 'Adres'
            },
            {
                xtype: 'button',
                ui: "action",
                id : 'submit-button',
                text: 'Wyślij'
            }
        ]
    }
})
