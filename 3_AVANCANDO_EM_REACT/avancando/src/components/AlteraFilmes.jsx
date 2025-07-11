const AlteraFilmes = ({handleFilmes}) => {
    const filmes = ["Vingadores","E o Vento Levou","Homem de Ferro"]
  return (
    <div>
        <button onClick={() => handleFilmes(filmes[0])}>Filme 1</button>
        <button onClick={() => handleFilmes(filmes[1])}>Filme 2</button>
        <button onClick={() => handleFilmes(filmes[2])}>Filme 3</button>
    </div>
  )
}

export default AlteraFilmes