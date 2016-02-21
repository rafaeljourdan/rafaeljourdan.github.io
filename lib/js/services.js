//Serviços
app.factory('DataServiceXML', dataServiceXMLFunc);

function dataServiceXMLFunc($http){
	
	return {
	   get: function(caminhoXML, callback){
	        $http.get(
	            caminhoXML,
	                {
	                transformResponse:
	                    function (xml) {
	                        console.log("transformando xml -> json");
	                        var x2js = new X2JS();
							var json = x2js.xml_str2json(xml);
							
							console.log(json.portfolio);

							return json.portfolio;
	                    }
	                }
	            ).
	        success(function(data, status) {
	            console.log("leitura XML ok");
	            callback(data);
	        }).
	        error(function(data, status) {
	            console.log("Erro na leitura do XML: " + status);
	        });
	   }
	};

}