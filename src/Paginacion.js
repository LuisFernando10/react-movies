export default function Paginacion(props) {

    const getPages = () => {
        
         const resultado = [];
         for (var i = 0; i < props.total; i++){
            resultado.push(
                <a className="active" href="#">{ i }</a>
            );
         }
         return resultado;
    }

    return (
        <div className="topbar-filter">
            <div className="pagination2">
                <span>Página { props.pagina } de { props.total }:</span>

                { Array.apply(0, Array(props.total)).map( value => {
                    <a className="active" href="#">1</a>
                } )}
                
                { getPages() }

                <a href="#">2</a>
                <a href="#"><i className="ion-arrow-right-b"></i></a>
            </div>
        </div>
    );
}