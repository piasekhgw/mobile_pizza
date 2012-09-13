Ext.define("appka.view.PageContainer", {
    extend: "Ext.Container",     
    xtype: "pagecontainer",
    config: {
        items: [
            {
                xtype: "toolbar",
                docked: "top",
                title: "Lista składników",
            },             
            {
                xtype: "container",
                items: [
                    {
                        xtype: "jlist",
                        height: "80%"    
                    }
                ]                                            
            }
        ]
    }
});
