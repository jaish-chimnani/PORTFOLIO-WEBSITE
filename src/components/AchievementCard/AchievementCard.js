import "./AchievementCard.scss"

const AchievementCard=({title,subtitle,image,footerLink})=>{
    function openUrlInNewTab(url,name){
        var win=window.open(url,"_blank");
        win.focus();
    }
    return (
        <div className="cerificate-card main-div1">
        <div className="certificate-img-div">
        <img src={image} className="card-img"></img>

        </div>
        <div className="certificate-details">
        <h5 className="card-title">
            {title}
        </h5>
        <p className="card-subtitle">{subtitle}</p>
        </div>
        <div className="certificate-card-footer">
        {footerLink.map((m)=>(
            <span className="certificate-tag" onClick={()=>{openUrlInNewTab(m.url,m.name)}}>

                {m.name}</span>
        ))}
        </div>
        </div>
    )
}
export default AchievementCard;