var DatatableRemoteAjaxDemo = {
    init: function() {
        var t;
        (t = $(".m_datatable").mDatatable({
            data: {
                type: "remote",
                source: {
                    read: {
                        method: "GET",
                        //url: "https://keenthemes.com/metronic/preview/inc/api/datatables/demos/default.php",
                        url: "http://internalmail.com/saheb-php/jsonartist.php",
                        map: function(t) {
                            var e = t;
                            return void 0 !== t.data && (e = t.data), e
                        }
                    }
                },
                pageSize: 10,
                serverPaging: !0,
                serverFiltering: !0,
                serverSorting: !0
            },
            layout: {
                scroll: !1,
                footer: !1
            },
            sortable: !0,
            pagination: !0,
            toolbar: {
                items: {
                    pagination: {
                        pageSizeSelect: [10, 20, 30, 50, 100]
                    }
                }
            },
            search: {
                input: $("#generalSearch")
            },
            columns: [{
                field: "id",
                title: "#",
                sortable: !1,
                width: 40,
                selector: !1,
                textAlign: "center"
            }/*, {
                field: "OrderID",
                title: "Order ID",
                filterable: !1,
                width: 150,
                template: "{{OrderID}} - {{ShipCountry}}"
            }*//*, {
                field: "ShipCountry",
                title: "Ship Country",
                width: 150,
                template: function(t) {
                    return t.ShipCountry + " - " + t.ShipCity
                }
            },*/,{
                field: "name",
                title: "Title"
            }, {
                field: "genere",
                title: "Genere",
                width: 100
            }, 
            {
                field: "totalview",
                title: "Total Views",
                width: 100
            },
            {
                field: "totalview",
                title: "Total Views",
                width: 100
            },
            {
                field: "budget",
                title: "Budget",
                width: 100
            },
            /*{
                field: "ShipDate",
                title: "Ship Date",
                type: "date",
                format: "MM/DD/YYYY"
            }, {
                field: "Latitude",
                title: "Latitude",
                type: "number"
            }, {
                field: "Status",
                title: "Status",
                template: function(t) {
                    var e = {
                        1: {
                            title: "Pending",
                            class: "m-badge--brand"
                        },
                        2: {
                            title: "Delivered",
                            class: " m-badge--metal"
                        },
                        3: {
                            title: "Canceled",
                            class: " m-badge--primary"
                        },
                        4: {
                            title: "Success",
                            class: " m-badge--success"
                        },
                        5: {
                            title: "Info",
                            class: " m-badge--info"
                        },
                        6: {
                            title: "Danger",
                            class: " m-badge--danger"
                        },
                        7: {
                            title: "Warning",
                            class: " m-badge--warning"
                        }
                    };
                    return '<span class="m-badge ' + e[t.Status].class + ' m-badge--wide">' + e[t.Status].title + "</span>"
                }
            }, {
                field: "Type",
                title: "Type",
                template: function(t) {
                    var e = {
                        1: {
                            title: "Online",
                            state: "danger"
                        },
                        2: {
                            title: "Retail",
                            state: "primary"
                        },
                        3: {
                            title: "Direct",
                            state: "accent"
                        }
                    };
                    return '<span class="m-badge m-badge--' + e[t.Type].state + ' m-badge--dot"></span>&nbsp;<span class="m--font-bold m--font-' + e[t.Type].state + '">' + e[t.Type].title + "</span>"
                }
            },*/ {
                field: "Actions",
                width: 110,
                title: "Actions",
                sortable: !1,
                overflow: "visible",
                template: function(t, e, a) {
                    return '\t\t\t\t\t\t<div class="dropdown ' + (a.getPageSize() - e <= 4 ? "dropup" : "") + '">\t\t\t\t\t\t\t<a href="#" class="btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" data-toggle="dropdown">                                <i class="la la-ellipsis-h"></i>                            </a>\t\t\t\t\t\t  \t<div class="dropdown-menu dropdown-menu-right">\t\t\t\t\t\t    \t<a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>\t\t\t\t\t\t    \t<a class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>\t\t\t\t\t\t    \t<a class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>\t\t\t\t\t\t  \t</div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<a class="m-menu__link" data-target="#editArtist" data-toggle="modal" href="#">\t\t\t\t\t\t\t<i class="fa fa-edit"></i>\t\t\t\t\t\t</a>\t\t\t\t\t'
                }
            }]
        })).getDataSourceQuery(), $("#m_form_status").on("change", function() {
            t.search($(this).val().toLowerCase(), "Status")
        }), $("#m_form_type").on("change", function() {
            t.search($(this).val().toLowerCase(), "Type")
        }), $("#m_form_status, #m_form_type").selectpicker()
    }
};
jQuery(document).ready(function() {
    DatatableRemoteAjaxDemo.init()
});