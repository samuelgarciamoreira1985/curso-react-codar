import classesTitlePet from "./TitlePet.module.css"

const TitlePet = () => {
  return (
    <div>
        <h2 className={classesTitlePet.frase}>O minha gata se chama</h2>
        <h3 className={classesTitlePet.gata}>Mili</h3>
    </div>
  )
}

export default TitlePet