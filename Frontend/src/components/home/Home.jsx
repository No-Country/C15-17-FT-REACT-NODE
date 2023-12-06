import "./Home.css";

const Home = () => {
    return (
        <div className='content home'>
            <div className='content_history'>
                <div className="history"><span>1</span></div>
                <div className="history"><span>2</span></div>
                <div className="history"><span>3</span></div>
                <div className="history"><span>4</span></div>
                <div className="history"><span>5</span></div>
                <div className="history"><span>6</span></div>
                <div className="history"><span>7</span></div>
                <div className="history"><span>8</span></div>
            </div>
            <div className="buscador">
                <input type="search" name="" placeholder="Messi campeon..." className="input_search"/>
                <button className="btn_search">Buscar</button>
            </div>
            <div className="content_home">
                <div className='home_feed'>
                    <div className="img_feed"><span>1</span></div>
                    <div className="img_feed"><span>2</span></div>
                    <div className="img_feed"><span>3</span></div>
                    <div className="img_feed"><span>4</span></div>
                    <div className="img_feed"><span>5</span></div>
                    <div className="img_feed"><span>6</span></div>
                    <div className="img_feed"><span>7</span></div>
                    <div className="img_feed"><span>8</span></div>
                </div>
            </div>
            <nav>
                <div className="content_nav_btn">
                    <button className='btn'>Subir</button>
                    <button className='btn'>Buscar</button>
                    <button className='btn active'>Inicio</button>
                    <button className='btn'>Pines</button>
                    <button className='btn'>Perfil</button>
                </div>
            </nav>
        </div>
    );
};

export default Home;
