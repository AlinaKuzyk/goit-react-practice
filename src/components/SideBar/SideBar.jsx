import MenuList from 'components/Menu/MenuList'

// первые буквы названия иконки нужно писать последними в пути
import { BsPersonCircle } from 'react-icons/bs';



const SideBar = () => {
	return (<aside>
		<div>Title</div>
		<MenuList/>
		<div><BsPersonCircle color='#FF6B0A'/>Бил Гейтс</div>
	</aside>)
}
export default SideBar