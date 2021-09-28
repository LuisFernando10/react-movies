export default function Paginacion(props) {

    const getPages = () => {
        
         const result = [];
         for (let i = 0; i < props.total; i++){
             let page = i + 1;
             result.push(
                <a onClick={ () => props.onChange( page ) }
                   className={ props.pagina === page ? 'active' : '' }>
                    { page }
                </a>
            );
         }
         return result;
    }

    return (
        <div className="topbar-filter">
            <div className="pagination2">
                <span>Página { props.pagina } de { props.total }:</span>
                { getPages() }
            </div>
        </div>
    );
}