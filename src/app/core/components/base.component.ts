import { LocalStorageUtils } from "@core/services/localStorageUtils";
import { imagesConstants } from "../../../../public/imagesConstants";
import { Injectable } from "@angular/core";


@Injectable()
export class BaseComponents {

    imagesConstants = imagesConstants;

    constructor(
        protected localStorageUtils: LocalStorageUtils
    ){

    }
}