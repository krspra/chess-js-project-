function blackpawninfo(current_position){
    return {current_position,
    imgurl:"images/black/pawn.png"};
}
function whitepawninfo(position){
    return {position,
    imgurl:"images/white/pawn.png"};
}
function blackrookinfo(position){
    return {
        position,
        imgurl:"images/black/rook.png"}
}
function whiterookinfo(position){
    return {position,
    imgurl:"images/white/rook.png"};
}
function whiteknightinfo(position){
    return {position,
    imgurl:"images/white/knight.png"};
}
function blackknightinfo(position){
    return {position,
    imgurl:"images/black/knight.png"};
}
function whitebishopinfo(position){
    return {position,
    imgurl:"images/white/bishop.png"};
}
function blackbishopinfo(position){
    return {position,
    imgurl:"images/black/bishop.png"};
}
function whitekinginfo(position){
    return {position,
    imgurl:"images/white/king.png"};
}
function blackkinginfo(position){
    return {position,
    imgurl:"images/black/king.png"};
}
function whitequeeninfo(position){
    return {position,
    imgurl:"images/white/queen.png"};
}
function blackqueeninfo(position){
    return {position,
    imgurl:"images/black/queen.png"};
}

export {blackpawninfo,whitepawninfo,blackbishopinfo,whitebishopinfo,blackkinginfo,whitekinginfo,blackknightinfo,whiteknightinfo,blackqueeninfo,whitequeeninfo,blackrookinfo,whiterookinfo};