import Vue from 'vue'
let contexts = require.context('./', false, /\.js$/);
contexts.keys().forEach(filter => {
	const name = filter.substr(filter.lastIndexOf('/') + 1).replace('.js', '');
	if (name === 'index') return;
	const filterEntity = contexts(filter).default;
	console.log('name', name);
	Vue.filter(name, filterEntity)
});