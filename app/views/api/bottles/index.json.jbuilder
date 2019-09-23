@bottles.each do |bottle|
    json.set! bottle.id do 
        json.partial! 'api/bottles/bottle', bottle: bottle 
    end 
end 