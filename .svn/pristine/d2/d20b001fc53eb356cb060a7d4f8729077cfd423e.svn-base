export const 	setTitle = (t) => {	//	设置标题
	document.title = t
	var i = document.createElement('iframe')
	i.src = ''
	i.style.display = 'none'
	i.onload = () => {
		setTimeout(() => {
			i.remove()
		}, 9)
	}
	document.body.appendChild(i)
}