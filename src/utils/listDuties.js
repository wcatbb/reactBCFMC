export const listDuties = (duties) => {
    return (
        <ul>
            {duties.map((duty) => 
                <li key={duty}>{duty}</li>
            )}
        </ul>
    );
};