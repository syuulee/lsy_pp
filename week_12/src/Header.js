import { IconName } from "react-icons/io";

function Header() {
    return (
        <>
            <header>
                <h1>
                    <a href=''>
                        <img src="./img/logo.svg" alt="" />
                    </a>
                </h1>
                <nav className="gnb">
                    <ul>
                        <li><a href="">홈</a></li>
                        <li><a href="">체험/구매</a></li>
                        <li><a href="">갤러리</a></li>
                        <li><a href="">브랜드스토리</a></li>
                    </ul>
                </nav>
                <div className="icon">
                    <IoIosCart />
                </div>
            </header>
        </>
    );
}

export default Header;