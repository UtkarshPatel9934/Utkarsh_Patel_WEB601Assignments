import {Content} from './content'

export class List {
	private _contentArray: Content[];

	constructor()
	{
		// setup the array as an Empty initial..
		this._contentArray = [];
	}

	get content():Content[]{
		return this._contentArray;
	}

	addContent(Content:any)
	{
		this._contentArray.push(Content);
	}

	getLength()
	{
		return this._contentArray.length;
	}

	
	getOutput(index:number) {
		for(var i = 0; i < this.getLength(); i++) {
		    if(this._contentArray[i].id === index) {
			return `
			<div id="card" class="card bg-dark m-4">
				<img src="${this._contentArray[index].imageLink}" class="card-img-top" alt="...">
					<div class="card-body">
						<h1 class="text-danger card-title">${this._contentArray[index].title}</h1>
						<h3 class="text-info card-text">${this._contentArray[index].author}</h3>
						<h4 class="text-warning card-text">${this._contentArray[index].type}</h4>
						<p class="text-success card-text">${this._contentArray[index].body}</p>
					</div>
			</div>`
		    }
		}
		return this.htmlErrorMethod(index)
	    }

	htmlErrorMethod(index:number)
	{
		return `<div class="text-center alert alert-danger" role="alert">There is no data stored in an Array at Index : <strong>${index}</strong> <br/>that you wants to access</div>`;
	}
}
