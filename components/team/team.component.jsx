import styles from './team.module.scss';
const TeamBox = ({ member, experienceLabel }) => {
    return (
        <div className={styles.teamBox}>
            <img src={member.imageSrc} alt={member.name} />
            <p className='small-par'>{member.name}</p>
            <p>{member.role}</p>
            <p>{member.journey}</p>
            <p className='small-par'>{experienceLabel}</p>
            <img src={member.experienceImageSrc} alt={`${member.name} Experience`} />
        </div>
    );
}
const Team = ({title,text,members,experienceLabel}) => {
    return (
<div id="team" className={styles.teamWrapper}>
            <div className='vertical-container right'>
                <h1>{title}</h1>
                <span className='dash'></span>
                <p>{text}</p>
            </div>
            <div className={styles.teamHolder}>
            {members.map(member => <TeamBox key={member.name} member={member} experienceLabel={experienceLabel} />)}
            </div>
        </div>
    )
}

Team.defaultProps = {
    title:"Our Team",
    text: <>We’ve worked across Tech, Government, <br /> Insurance, & Startups in 7 countries</>,
    members: [
        {
            name: "Oday Kamal",
            role: "Founder/CEO",
            journey: "Bitcoin journey started after he experienced hyperinflation in Lebanon.",
            imageSrc: "/assets/oday-kamal.svg",
            experienceImageSrc: "/assets/oday-experience.png"
        },
        {
            name: "Javier Vargas",
            role: "Co-Founder/CTO",
            journey: "Bitcoin journey started in 2013 whilst browsing linux forums",
            imageSrc: "/assets/Javier-Vargas.svg",
            experienceImageSrc: "/assets/javier-experience.png"
        }
    ],
    experienceLabel:"Past Experience"
}

export default Team;
