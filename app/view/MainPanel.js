Ext.define("appka.view.MainPanel", {
    extend: "Ext.TabPanel",
    tabBarPosition: "bottom",
    requires: ['Ext.Panel', 'Ext.TitleBar'],
    config: {        
        items: [
            {
                title: 'Menu',
                items: 
                {
                    xtype: "pagecontainer"
                }
            },
            {
                title: 'Koszyk',
                layout: "vbox",                               
                items: [
                    {
                        xtype: "titlebar",
                        title: "Zawartość koszyka",
                        docked: "top",                                                                     
                    },                                        
                    {
                        xtype: "ordereditems",
                        height: "80%",
                        
                    },
                    {
                        xtype: "panel",                        
                        id: "total-price",
                        cls: "order-header",
                        docked: "top",
                    },                    
                ]
            },
            {
                title: 'Zamów',
                items: [ 
                    {
                        xtype: "titlebar",
                        title: "Złoż zamówienie",                                                                                               
                    },
                    {
                        xtype: "orderform",                        
                    }
                ]
            },
        ]
    }
})
