import { useEffect } from "react"
import { Link } from "react-router-dom";
// import '../../utils/style/Error.css'

function Error() {
    useEffect(() => { document.title = "Argent Bank - 404" })
    return (
        <div>
            <section className="section-error">
                <h1>404</h1>
                <p>
                    Oups! La page que vous demandez n’existe pas.
                </p>
                <Link to='/'>Retourner à la page d'accueil</Link>
            </section>
        </div>
    )
}

export default Error