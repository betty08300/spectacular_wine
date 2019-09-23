class Api::BottlesController < ApplicationController 
    def index
        @bottles = Bottle.all
    end 

    def create 
        @bottle = Bottle.new(bottle_params)
        if @bottle.save 
            render :show
        else 
            render json: @bottle.errors.full_messages, status: 422
        end  
    end 

    def show
        @bottle = Bottle.find(params[:id])
    end 

    private 

    def bottle_params
        params.require(:bottle).permit(:bottle_id, :winery_full, :wine_full, :vintage, :taster_initials,
        :color, :country, :region, :score, :price, :alternate_bottle_size, :issue_date, :top100_year, :top100_rank)
    end 

end 