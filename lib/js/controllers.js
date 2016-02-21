//Controllers
app.controller('portfolioController', portfolioFunc);

function portfolioFunc($scope, DataServiceXML) {

    var caminhoXML = "";

    var init = function () {

        var caminhoXML = PASTA_XML_PATH + "portfolio.xml"
        
        callbackFunc = function(data) {            
            $scope.portfolio = data;
            init_map(data.contato.localizacao);
        };
		       
        DataServiceXML.get(caminhoXML, callbackFunc);
    };

    init();
}
