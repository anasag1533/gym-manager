export const addMemberToList = (email) => {
    
    let presenceList = []
    

    if(typeof window !== 'undefined')
    {
        if(localStorage.getItem('presenceList'))
        {
            presenceList = JSON.parse(localStorage.getItem('presenceList'))
        }

        presenceList.push(email)

            localStorage.setItem('presenceList',JSON.stringify(presenceList));

    }
}


export const getMemberList = () => {
    if(typeof window !== undefined)
    {
        if(localStorage.getItem('presenceList'))
        {
            return JSON.parse(localStorage.getItem('presenceList'))
        }
    }
    return [];
}


export const emptyList = () => {
    if(typeof window !== undefined)
    {
        localStorage.removeItem('presenceList');
    }
}