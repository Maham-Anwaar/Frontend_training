const listReducer = (state=[], action) => {
    switch (action.type){
        case 'INCREMENT_COUNT':{
            state.map(item=>{
                if(item.name===action.payload.name)   item.amount+=1;
            })
            return [...state]
        }
        case 'DECREMENT_COUNT':{
            let remove = 0;
            state.map(item=>{
                if(item.name===action.payload.name){
                    item.amount-=1;
                    if(item.amount===0)
                        remove = state.filter(x=>x!==item)
                }
            })
            if(remove) return [...remove]
            return [...state]
        }
        case 'ADD_OBJ_TO_LIST':{
            // adds obj to list, but if it already exists then it just increments amount :D
            let changed = 0;
            state.map(item=>{
                if(item.name===action.payload.name){
                    item.amount+=1;
                    changed = 1;
                }
            })
            if(changed) return [...state]
            return [...state, action.payload]
            
        }
    }
}

export default listReducer


