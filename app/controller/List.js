Ext.define('appka.controller.List', {
    extend: 'Ext.app.Controller',    
    requires: ["Ext.MessageBox"],
    config: {        
        refs: {
            mainList: '#main-list',
            totalPrice: '#total-price',
            removeButton: {
                selector: "button[family='remove-button']"
            },
            submitButton: "#submit-button"
        },
        control: {
            mainList: {
                itemdoubletap: 'addItem'
            },
            totalPrice: {
                initialize: 'setContent'    
            },
            removeButton: {
                tap: "removeFromOrders"    
            },
            submitButton: {
                tap: "sendOrder"
            }
        }
    },

    addItem: function(list, index, target, record) {
        var element = target.down(".x-list-item-label");
        element.addCls("add-action");
        target.removeCls("x-item-selected");
        Ext.defer(function() {
            element.removeCls("add-action");
            target.addCls("x-item-selected");
        }, 300);      
      
        var order_store = Ext.ComponentManager.get("orders").getStore();
        var order_record = order_store.findRecord("component", record.getData().component);
        if(order_record == null) 
            order_store.add({id: record.getData().id, component: record.getData().component, price: record.getData().price, count: 1})
        else
            order_record.set("count", order_record.getData().count  + 1);
        this.setContent(Ext.ComponentManager.get("total-price"));
    },
    
    setContent: function(elem) {
        var itemsPrice = 0;
        var order_store = Ext.ComponentManager.get("orders").getStore().getData();
        order_store.each(function(element) {
            itemsPrice += (element.getData().price * element.getData().count);
        });
        elem.setHtml("Razem: " + (Math.round(itemsPrice * 100)/100) + " zł");    
    },
    
    removeFromOrders: function(elem) {
        currentRecord = elem.up("dataitem").getRecord();
        if(currentRecord.getData().count == 1)
            currentRecord.destroy();
        else
            currentRecord.getData().count--;
        Ext.ComponentManager.get("orders").refresh();
        this.setContent(Ext.ComponentManager.get("total-price"));
    }, 
    
    sendOrder: function() {
        var order_store = Ext.ComponentManager.get("orders").getStore().getData();
        if(order_store.length == 0)
            Ext.Msg.show({
                title: 'Zamówienie',
                message: 'Zamówienie nie zawiera żadnych pozycji.',
                height: "30%",
                buttons: Ext.MessageBox.OK,                                    
            });
        else {
            var parent = this;
            Ext.Msg.show({
                title: 'Zamówienie',
                message: 'Czy chcesz potwierdzić zamówienie?',
                height: "30%",
                buttons: [
                    {
                        text: "Tak",      
                    },
                    {
                        text: "Nie",
                    }
                ],
                fn: function(btn) {
                    if(btn == 'Tak') {
                        Ext.ComponentManager.get("orders").getStore().removeAll();
                        Ext.ComponentManager.get("orders").refresh();
                        parent.setContent(Ext.ComponentManager.get("total-price"));
                        Ext.Msg.show({
                            title: 'Zamówienie',
                            message: 'Zamówienie zostało przyjęte do realizacji.',
                            height: "30%",
                            buttons: Ext.MessageBox.OK,                                    
                        });
                    }
                    else if(btn == "Nie") {
                        this.close();
                    }
                }                                    
            });                        
        }            
    }
});