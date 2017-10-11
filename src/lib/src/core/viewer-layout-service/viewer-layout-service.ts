
import { BehaviorSubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import { MimeViewerConfig } from '../mime-viewer-config';
import { ViewerLayout } from '../models/viewer-layout';

@Injectable()
export class ViewerLayoutService {

  private viewerLayout: ViewerLayout;
  public paged = true;
  private viewerLayoutSubject: BehaviorSubject<ViewerLayout> = new BehaviorSubject(new MimeViewerConfig().initViewerLayout);
  public viewerLayoutState = this.viewerLayoutSubject.asObservable();

  constructor() { }

  toggleState(viewerLayout: ViewerLayout) {
    this.viewerLayoutSubject.next(viewerLayout);
  }

}