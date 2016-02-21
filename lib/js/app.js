var app = angular.module('portfolioApp', ['ngSanitize']);

//Endereços das pastas para uso interno
// com o "/" no início do endereço ele é relativo ao domínio
// Sem o "/" no início ele é relativo à pasta que chama o JS, no caso a index
var PASTA_IMAGEM_PATH = 'lib/img/';
var PASTA_XML_PATH =  'xml/';	//'galeria/aula{aula_numero}/xml/';

//Local
var PASTA_TEMPLATE_RECURSO_PATH = '';

//Local
//var PASTA_IMG_PATH = '/disciplinaportal/repositorio/engineportal/img/';
//var PASTA_TEMPLATE_RECURSO_PATH = '/disciplinaportal/repositorio/engineportal/templates/';

//Local IIS (pasta wwwroot)
var PASTA_IMG_PATH = '/rafaeljourdan.github.io/lib/img/';
var PASTA_TEMPLATE_RECURSO_PATH = '/rafaeljourdan.github.io/lib/templates/';