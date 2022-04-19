import {
	createStore,
	mapState
} from 'vuex'
import config from '../congfig/config.js'

let lifeData = {};
try {
	// 尝试获取本地是否存在lifeData变量，第一次启动APP时是不存在的
	lifeData = localStorage.getItem('lifeData') ? JSON.parse(localStorage.getItem('lifeData')) : {};
} catch (e) {

}
// 需要永久存储，且下次APP启动需要取出的，在state中的变量名
let saveStateKeys = ['vuex_token'];

// 保存变量到本地存储中
const saveLifeData = function(key, value) {
	// 判断变量名是否在需要存储的数组中
	if (saveStateKeys.indexOf(key) != -1) {
		// 获取本地存储的lifeData对象，将变量添加到对象中
		let tmp = lifeData;
		// 第一次打开APP，不存在lifeData变量，故放一个{}空对象
		tmp = tmp ? tmp : {};
		tmp[key] = value;
		// // 执行这一步后，所有需要存储的变量，都挂载在本地的lifeData对象中
		localStorage.setItem('lifeData', JSON.stringify(tmp));
	}
}

// 主题scss变量转js变量
import theme from '../libs/theme.scss'
const $theme = theme
console.log($theme)


const store = createStore({
	// 下面这些值仅为示例，使用过程中请删除
	state: {
		// token
		vuex_token: lifeData.vuex_token ? lifeData.vuex_token : '',
		// 请求域名
		$base_url: 'http://10.255.52.165:8001',
		// 导航栏强制刷新key
		$navkey: 0,
		//全局主题 这样做的目的是保证模板上可以直接使用
		...$theme,
		//网页配置
		...config
	},
	mutations: {
		$uStore(state, payload) {
			// 判断是否多层级调用，state中为对象存在的情况，诸如user.info.score = 1
			let nameArr = payload.name.split('.');
			let saveKey = '';
			let len = nameArr.length;
			if (nameArr.length >= 2) {
				let obj = state[nameArr[0]];
				for (let i = 1; i < len - 1; i++) {
					obj = obj[nameArr[i]];
				}
				obj[nameArr[len - 1]] = payload.value;
				saveKey = nameArr[0];
			} else {
				// 单层级变量，在state就是一个普通变量的情况
				state[payload.name] = payload.value;
				saveKey = payload.name;
			}
			// 保存变量到本地，见顶部函数定义
			saveLifeData(saveKey, state[saveKey])
		}
	}
})

// 尝试将用户在根目录中的store/index.js的vuex的state变量，全部加载到全局变量中
let $uStoreKey = [];
try {
	$uStoreKey = store.state ? Object.keys(store.state) : [];
} catch (e) {

}
const storeMixin = {
	mounted(){
		document.documentElement.scrollTop = 0
	},
	computed: {
		// 将vuex的state中的所有变量，解构到全局混入的mixin中
		...mapState($uStoreKey)
	}
}
export {
	store,
	storeMixin
}
