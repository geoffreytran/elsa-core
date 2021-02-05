/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ActivityModel, WorkflowModel } from "./models/domain";
export namespace Components {
    interface ElsaActivityPickerFlyout {
    }
    interface ElsaActivityPickerModal {
    }
    interface ElsaDesignerTree {
        "workflowModel": WorkflowModel;
    }
    interface ElsaDesignerTreeActivity {
        "activityModel": ActivityModel;
        "icon": string;
    }
    interface ElsaModalDialog {
        "hide": () => Promise<void>;
        "show": () => Promise<void>;
    }
    interface ElsaStudio {
    }
}
declare global {
    interface HTMLElsaActivityPickerFlyoutElement extends Components.ElsaActivityPickerFlyout, HTMLStencilElement {
    }
    var HTMLElsaActivityPickerFlyoutElement: {
        prototype: HTMLElsaActivityPickerFlyoutElement;
        new (): HTMLElsaActivityPickerFlyoutElement;
    };
    interface HTMLElsaActivityPickerModalElement extends Components.ElsaActivityPickerModal, HTMLStencilElement {
    }
    var HTMLElsaActivityPickerModalElement: {
        prototype: HTMLElsaActivityPickerModalElement;
        new (): HTMLElsaActivityPickerModalElement;
    };
    interface HTMLElsaDesignerTreeElement extends Components.ElsaDesignerTree, HTMLStencilElement {
    }
    var HTMLElsaDesignerTreeElement: {
        prototype: HTMLElsaDesignerTreeElement;
        new (): HTMLElsaDesignerTreeElement;
    };
    interface HTMLElsaDesignerTreeActivityElement extends Components.ElsaDesignerTreeActivity, HTMLStencilElement {
    }
    var HTMLElsaDesignerTreeActivityElement: {
        prototype: HTMLElsaDesignerTreeActivityElement;
        new (): HTMLElsaDesignerTreeActivityElement;
    };
    interface HTMLElsaModalDialogElement extends Components.ElsaModalDialog, HTMLStencilElement {
    }
    var HTMLElsaModalDialogElement: {
        prototype: HTMLElsaModalDialogElement;
        new (): HTMLElsaModalDialogElement;
    };
    interface HTMLElsaStudioElement extends Components.ElsaStudio, HTMLStencilElement {
    }
    var HTMLElsaStudioElement: {
        prototype: HTMLElsaStudioElement;
        new (): HTMLElsaStudioElement;
    };
    interface HTMLElementTagNameMap {
        "elsa-activity-picker-flyout": HTMLElsaActivityPickerFlyoutElement;
        "elsa-activity-picker-modal": HTMLElsaActivityPickerModalElement;
        "elsa-designer-tree": HTMLElsaDesignerTreeElement;
        "elsa-designer-tree-activity": HTMLElsaDesignerTreeActivityElement;
        "elsa-modal-dialog": HTMLElsaModalDialogElement;
        "elsa-studio": HTMLElsaStudioElement;
    }
}
declare namespace LocalJSX {
    interface ElsaActivityPickerFlyout {
    }
    interface ElsaActivityPickerModal {
    }
    interface ElsaDesignerTree {
        "workflowModel"?: WorkflowModel;
    }
    interface ElsaDesignerTreeActivity {
        "activityModel"?: ActivityModel;
        "icon"?: string;
    }
    interface ElsaModalDialog {
    }
    interface ElsaStudio {
    }
    interface IntrinsicElements {
        "elsa-activity-picker-flyout": ElsaActivityPickerFlyout;
        "elsa-activity-picker-modal": ElsaActivityPickerModal;
        "elsa-designer-tree": ElsaDesignerTree;
        "elsa-designer-tree-activity": ElsaDesignerTreeActivity;
        "elsa-modal-dialog": ElsaModalDialog;
        "elsa-studio": ElsaStudio;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "elsa-activity-picker-flyout": LocalJSX.ElsaActivityPickerFlyout & JSXBase.HTMLAttributes<HTMLElsaActivityPickerFlyoutElement>;
            "elsa-activity-picker-modal": LocalJSX.ElsaActivityPickerModal & JSXBase.HTMLAttributes<HTMLElsaActivityPickerModalElement>;
            "elsa-designer-tree": LocalJSX.ElsaDesignerTree & JSXBase.HTMLAttributes<HTMLElsaDesignerTreeElement>;
            "elsa-designer-tree-activity": LocalJSX.ElsaDesignerTreeActivity & JSXBase.HTMLAttributes<HTMLElsaDesignerTreeActivityElement>;
            "elsa-modal-dialog": LocalJSX.ElsaModalDialog & JSXBase.HTMLAttributes<HTMLElsaModalDialogElement>;
            "elsa-studio": LocalJSX.ElsaStudio & JSXBase.HTMLAttributes<HTMLElsaStudioElement>;
        }
    }
}
