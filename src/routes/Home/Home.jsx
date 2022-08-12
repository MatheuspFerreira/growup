import "./Home.css"
import logo from "../../assets/Logos/GRWP.png"


export function Home () {

    return (
       <>   <div className="home__container">
                <div className="home__header">
                    <section className="home__nav">
                        <img src={logo} alt="logo.png" />
                        <ul>
                            <li>Home</li>
                            <li>Portfólio</li>
                            <li>Solicitar Orçamento</li>
                            <li>Contato</li>
                        </ul>
                    </section>
                    <section className="home__firstContent">
                        <h1>Destaque-se no digital</h1>
                        <p>Aqui na <span>GrowUp</span>, criamos páginas de alta performance com design único e impactante que conectam com o seu público e alavanca seu negócio.</p>
                        <button>ENTRAR EM CONTATO AGORA</button>

                    </section>

                </div>
                 <div className="home__main">

                 </div>
                 <div className="home__section">
                    <h1>Garanta já sua página !</h1>
                    <button><span>QUERO MINHA PÁGINA</span></button>
                 </div>
                 <div className="home__lastContent">

                 </div>
        
            </div>
            

       </>
       

    );
}