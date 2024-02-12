import errorImage from '../../img/sadcat.png';

export default function PokemonErrorView({ message }) {
    return (
        <div>
            <img src={errorImage} alt="sadcat" width="240"/>
            {message}
        </div>
    )
}