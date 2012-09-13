Ext.define("appka.view.OrderedItem", {
    extend: "Ext.dataview.component.DataItem",
    requires: ["Ext.Button", "Ext.Panel"],
    xtype: "ordereditem",
    initialize: function() {
        this.getItems().getAt(4).setText("x");
        this.getItems().getAt(1).setWidth("50%");
        this.getItems().getAt(1).setStyle("overflow: hidden");
        this.getItems().getAt(2).setWidth("15%");
        // this.getItems().getAt(2).setStyle("margin-left: 10px");
        this.getItems().getAt(3).setWidth("15%");
        this.getItems().getAt(4).setWidth("20%");
        this.getItems().getAt(4).setUi("action");
        this.getItems().getAt(4).family = "remove-button";
    },
    config: {
        cls: "order-item",
        component: true,        
        price: true, 
        count: true,       
        removeButton: true,
        layout: {
            type: "hbox",
            align: "center" 
        },
        dataMap: {
            getPrice: {
                setHtml: "price",                
            },
            getComponent: {
                setHtml: "component"
            },
            getCount: {
                setHtml: "count"
            },           
        }
    },
    applyPrice: function(config) {
        return Ext.factory(config, Ext.Panel, this.getPrice());
    }, 
    updatePrice: function(newPrice, oldPrice) {
        if(oldPrice) {
            this.remove(oldPrice);
        }
        if(newPrice) {
            this.add(newPrice);
        }
    },
    applyCount: function(config) {
        return Ext.factory(config, Ext.Panel, this.getCount());
    }, 
    updateCount: function(newCount, oldCount) {
        if(oldCount) {
            this.remove(oldCount);
        }
        if(newCount) {
            this.add(newCount);
        }
    },
    applyComponent: function(config) {
        return Ext.factory(config, Ext.Panel, this.getComponent());
    }, 
    updateComponent: function(newComponent, oldComponent) {
        if(oldComponent) {
            this.remove(oldComponent);
        }
        if(newComponent) {
            this.add(newComponent);
        }
    },
    applyRemoveButton: function(config) {
        return Ext.factory(config, Ext.Button, this.getRemoveButton());
    }, 
    updateRemoveButton: function(newRemoveButton, oldRemoveButton) {
        if(oldRemoveButton) {
            this.remove(oldRemoveButton);
        }
        if(newRemoveButton) {
            this.add(newRemoveButton);
        }
    }
})
