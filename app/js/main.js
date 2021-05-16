jQuery(document).ready(function($){
	var tabItems = $('.cd-tabs-navigation a'),
		tabContentWrapper = $('.cd-tabs-content');

	tabItems.on('click', function(event){
		event.preventDefault();
		var selectedItem = $(this);
		if( !selectedItem.hasClass('selected') ) {
			var selectedTab = selectedItem.data('content'),
				selectedContent = tabContentWrapper.find('li[data-content="'+selectedTab+'"]'),
				slectedContentHeight = selectedContent.innerHeight();
			
			tabItems.removeClass('selected');
			selectedItem.addClass('selected');
			selectedContent.addClass('selected').siblings('li').removeClass('selected');
			//animate tabContentWrapper height when content changes 
			tabContentWrapper.animate({
				'height': slectedContentHeight
			}, 200);
		}
	});

	//hide the .cd-tabs::after element when tabbed navigation has scrolled to the end (mobile version)
	checkScrolling($('.cd-tabs nav'));
	$(window).on('resize', function(){
		checkScrolling($('.cd-tabs nav'));
		tabContentWrapper.css('height', 'auto');
	});
	$('.cd-tabs nav').on('scroll', function(){ 
		checkScrolling($(this));
	});

	function checkScrolling(tabs){
		var totalTabWidth = parseInt(tabs.children('.cd-tabs-navigation').width()),
		 	tabsViewport = parseInt(tabs.width());
		if( tabs.scrollLeft() >= totalTabWidth - tabsViewport) {
			tabs.parent('.cd-tabs').addClass('is-ended');
		} else {
			tabs.parent('.cd-tabs').removeClass('is-ended');
		}
	}
});

jQuery(document).ready(function() {
	jQuery('#vmap').vectorMap({
		map: 'world_en',
		backgroundColor: '#333333',
		color: '#ffffff',
		hoverOpacity: 0.7,
		selectedColor: '#666666',
		enableZoom: true,
		showTooltip: true,
		values: sample_data,
		scaleColors: ['#C8EEFF', '#006491'],
		normalizeFunction: 'polynomial'
	});
});

window.onload=function(){
    Createcharts();
	$.get(
         `js/Data.json`,
        function (data) {
            $('#ajax1').text(data.ajax1);
			$('#ajax2').text(data.ajax2);
			$('#ajax3').text(data.ajax3);
        }
    );
}

function Createcharts() {
    chart = new ApexCharts(document.querySelector("#chart1"), options = {
        chart: {
            height: 350,     
            type: "line",
            background: '#34495e', 
            toolbar: {show: false},zoom: {enabled: false},},
        title: {
            text: 'Site Statics',
            align: 'left',       
            margin: 10,       
            offsetX: 0,    
            offsetY: 0,     
            floating: false,    
            style: {   
              fontSize:  '14px',   
              fontWeight:  'bold',
              color:  '#ffffff'       
            },      
        },
        stroke: {
            curve: 'straight'
          },
          grid: {   
                show: true,   
               borderColor:'#e5f3f7',  
               strokeDashArray:0,
                position:'back', 
                xaxis: {
                    lines: {
                       show:true
                    }        
                },   
                padding: {
                    top: 0,
                    right: 10,
                    bottom: 0,
                    left: -40
                },  
            },
          dataLabels: {
            enabled: false
          },
        colors: ["#1efe00","#dab045"],    
        markers: {
          size: 3,
            colors:'#ff00ff'
        },
        series: [ 
            {
                name: "Sales",
                data: [4235, 1654, 8652, 4215, 8653, 4258]
            },
            {
                name: "Visitors",
                data: [672, 142, 758, 6952, 4568, 12354]
            },
          ],
          stroke: {
            width: [4, 4]
          },
        xaxis: {
        categories: ['12-6-21', '12-7-21', '12-8-21', '12-9-21', '12-10-21', '12-11-21'],
        labels: {
        style: {
        colors:  '#ffffff'
        }
        }
          },
          yaxis: [ 
            {categories: [0,2000,4000,6000,8000,10000],       
              axisBorder: {       
                show:false,       
              },
              labels: {       
                offsetY:10,  
                offsetX:-60,     
                style: {      
                  colors: "#1efe00"     
                }     
              },    
            },
            {
                categories: [0,10000,20000,30000,40000,50000],
              labels: {
              offsetX:0,
              offsetY:0,
                style: {
                  colors: "#dab045"
                }
              },
            }
          ],
        tooltip: {
            shared: false,
            intersect: true,
            x: {
        
              show: false
            }
          },
          legend: {
            horizontalAlign: "left",
          labels: {
                  colors:"#dab045" ,
              },
            offsetX: 40,
            markers: {
                  width: 12,
                  height: 12,
                  radius: 0,
              },
          }
    });
    chart.render();
	
	var options = {
      chart: {
        height: 350,     
		
        type: "bar",   
         
        background: '#1b93e1', 
        toolbar: {
                    show: false,
                 },
            zoom: {
                enabled: false
            },
        },
        title: {
          text: 'Users Trend',
          align: 'left',       
          margin: 10,       
          offsetX: 0,    
          offsetY: 0,     
          floating: false,    
          style: {   
            fontSize:  '14px',   
            fontWeight:  'bold',
            color:  '#ffffff'       
          },      
      },
        colors: ["#384a5e","#21f407"],
      series: [{
      name: 'New',
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
      name: 'Sales',
      data: [76, 85, 100, 98, 87, 100, 91, 100, 94]
    },],
     
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '55%',
       
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    xaxis: {
     categories: ['12-6-21', '12-7-21', '12-8-21', '12-9-21', '12-10-21', '12-11-21'],
    },
    yaxis: {
      show: true,
      tickAmount: 5,
      min: 0,
      max: 100,
      
      
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands"
        }
      }
    },
    legend: {
        
      horizontalAlign: "left",
  
      offsetX: 40,
  
      markers: {
  
            width: 12,
  
            height: 12,
  
            radius: 0,
            
            
          
  
        },
  
    }
    };

    var chart1 = new ApexCharts(document.querySelector("#chart2"), options);
    chart1.render();
}


