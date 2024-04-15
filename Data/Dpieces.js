function blackpawninfo(current_position){
    return {current_position,
    imgurl:"images/black/pawn.png",
    piecename:"blackpawn"};
}
function whitepawninfo(position){
    return {position,
    imgurl:"images/white/pawn.png",
    piecename:"whitepawn"};
}
function blackrookinfo(position){
    return {
        position,
        imgurl:"images/black/rook.png",
        piecename:"blackrook"}
}
function whiterookinfo(position){
    return {position,
    imgurl:"images/white/rook.png",
    piecename:"whiterook"};
}
function whiteknightinfo(position){
    return {position,
    imgurl:"images/white/knight.png",
    piecename:"whiteknight"};
}
function blackknightinfo(position){
    return {position,
    imgurl:"images/black/knight.png",
    piecename:"blackknight"};

}
function whitebishopinfo(position){
    return {position,
    imgurl:"images/white/bishop.png",
    piecename:"whitebishop"};
}
function blackbishopinfo(position){
    return {position,
    imgurl:"images/black/bishop.png",
    piecename:"blackbishop"};
}
function whitekinginfo(position){
    return {position,
    imgurl:"images/white/king.png",
    piecename:"whiteking"};
}
function blackkinginfo(position){
    return {position,
    imgurl:"images/black/king.png",
    piecename:"blackking"};
}
function whitequeeninfo(position){
    return {position,
    imgurl:"images/white/queen.png",
    piecename:"whitequeen"};
}
function blackqueeninfo(position){
    return {position,
    imgurl:"images/black/queen.png",
    piecename:"blackqueen"};
}

export {blackpawninfo,whitepawninfo,blackbishopinfo,whitebishopinfo,blackkinginfo,whitekinginfo,blackknightinfo,whiteknightinfo,blackqueeninfo,whitequeeninfo,blackrookinfo,whiterookinfo};