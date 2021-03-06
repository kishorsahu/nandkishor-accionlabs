import {
  Component,
  DebugElement,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  TemplateRef,
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpModule } from '@angular/http';
import { ListService } from '../../services/list.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ColumnList } from '../../models/ColumnList';
//import { ListComponent } from './list.component';
import { By } from '@angular/platform-browser';
import { ListComponent } from 'src/app/list/components/list/list.component';


describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let ListService: ListService;
  let debugElement: DebugElement;
  let componentSpy;
  let columnSpy ;
  
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpModule, NgxDatatableModule],
      //providers: [ListService],
      declarations: [ ListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    columnSpy = spyOn(component, 'getList').and.callThrough();
  });

  it('should create', () => {
    expect(component.rows).toBeTruthy();
    expect(columnSpy).toBeDefined();
  });

  describe('#ngOnInit', () => {
    it('ngxTable has to be  defined ',() => {
      fixture = TestBed.createComponent(ListComponent);
      component = fixture.componentInstance;
      expect(fixture.nativeElement.querySelector('ngx-datatable')).toBeDefined();
    });
  });

});
