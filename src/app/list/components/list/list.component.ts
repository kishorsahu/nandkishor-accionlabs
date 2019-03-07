import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { ListService } from '../../services/list.service';
import { ColumnList } from '../../models/columnList';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
	rows : any = new Array<ColumnList>();
	expanded = {};
	timeout: any;

	private isLoading: boolean = false;
	@ViewChild('myTable') table;

	constructor( 
		private service : ListService) { }

	ngOnInit() {
		console.log(this.getList());
	}

	getList() {
		this.service.getList().subscribe( data => {
			this.rows = data;

		});
	}

	onPage(event) {
		clearTimeout(this.timeout);
		this.timeout = setTimeout(() => {
			console.log('paged!', event);
		}, 100);
	}

	getRowHeight(row) {
		return row.height;
	}

}
