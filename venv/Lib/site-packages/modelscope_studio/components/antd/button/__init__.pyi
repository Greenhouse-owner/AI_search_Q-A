from __future__ import annotations

from typing import Any, Literal

from gradio.events import EventListener

from ....utils.dev import ModelScopeLayoutComponent, resolve_frontend_dir
from .group import AntdButtonGroup

PresetColors = Literal['blue', 'purple', 'cyan', 'green', 'magenta', 'pink',
                       'red', 'orange', 'yellow', 'volcano', 'geekblue',
                       'lime', 'gold']

from gradio.events import Dependency

class AntdButton(ModelScopeLayoutComponent):
    """
    Ant Design: https://ant.design/components/button

    To trigger an operation.

    When to use:
    A button means an operation (or a series of operations). Clicking a button will trigger its corresponding business logic.

    In Ant Design we provide 5 types of button.

    - Primary button: used for the main action, there can be at most one primary button in a section.
    - Default button: used for a series of actions without priority.
    - Dashed button: commonly used for adding more actions.
    - Text button: used for the most secondary action.
    - Link button: used for external links.

    And 4 other properties additionally.

    - danger: used for actions of risk, like deletion or authorization.
    - ghost: used in situations with complex background, home pages usually.
    - disabled: used when actions are not available.
    - loading: adds a loading spinner in button, avoids multiple submits too.
    """
    Group = AntdButtonGroup

    EVENTS = [
        EventListener("click",
                      callback=lambda block: block._internal.update(
                          bind_click_event=True),
                      doc="Set the handler to handle click event.")
    ]

    # supported slots
    SLOTS = ['icon', 'loading.icon']

    def __init__(
            self,
            value: str | None = "Run",
            props: dict | None = None,
            *,
            auto_insert_space: bool = True,
            block: bool | None = None,
            class_names: dict | None = None,
            danger: bool | None = None,
            disabled: bool | None = None,
            ghost: bool | None = None,
            href: str | None = None,
            html_type: Literal["button", "submit", "reset"] | None = None,
            icon: str | None = None,
            icon_position: Literal["start", "end"] | None = None,
            loading: bool | dict | None = None,
            shape: Literal["default", "circle", "round"] | None = None,
            size: Literal["large", "middle", "small"] | None = None,
            styles: dict | None = None,
            href_target: str | None = None,
            type: Literal["primary", "dashed", "link", "text", "default"]
        | None = None,
            variant: Literal["outlined", "dashed", "solid", "filled", "text",
                             "link"] | None = None,
            color: Literal['default', 'primary', 'danger', PresetColors]
        | None = None,
            root_class_name: str | None = None,
            as_item: str | None = None,
            _internal: None = None,
            # gradio properties
            visible: bool = True,
            elem_id: str | None = None,
            elem_classes: list[str] | str | None = None,
            elem_style: dict | None = None,
            render: bool = True,
            **kwargs):
        """
        Parameters:
            auto_insert_space: We add a space between two Chinese characters by default, which can be removed by setting auto_Insert_Space to false.
            block: Option to fit button width to its parent width.
            class_names: Semantic DOM class.
            danger: Set the danger status of button.
            disabled: Disabled state of button.
            ghost: Make background transparent and invert text and border colors.
            href: Redirect url of link button.
            html_type: Set the original html type of button, see: MDN.
            icon: Set the icon component of button.
            icon_position:  Set the icon position of button.
            loading:  Set the loading status of button.
            shape:  Can be set button shape.
            size:  Set the size of button.
            styles:  Semantic DOM style.
            href_target:  Same as target attribute of a, works when href is specified.
            type:  Set button type.
            variant: Set button variant.
            color: Set button color.
        """
        super().__init__(visible=visible,
                         elem_id=elem_id,
                         elem_classes=elem_classes,
                         render=render,
                         as_item=as_item,
                         elem_style=elem_style,
                         **kwargs)
        self.value = value
        self.props = props
        self.auto_insert_space = auto_insert_space
        self.block = block
        self.class_names = class_names
        self.danger = danger
        self.disabled = disabled
        self.ghost = ghost
        self.href = href
        self.html_type = html_type
        self.icon = icon
        self.icon_position = icon_position
        self.loading = loading
        self.shape = shape
        self.size = size
        self.styles = styles
        self.href_target = href_target
        self.type = type
        self.variant = variant
        self.color = color
        self.root_class_name = root_class_name

    FRONTEND_DIR = resolve_frontend_dir("button")

    @property
    def skip_api(self):
        return True

    def preprocess(self, payload: str | None) -> str | None:
        return payload

    def postprocess(self, value: str | None) -> str | None:

        return str(value)

    def example_payload(self) -> Any:
        return "Run"

    def example_value(self) -> Any:
        return "Run"
    from typing import Callable, Literal, Sequence, Any, TYPE_CHECKING
    from gradio.blocks import Block
    if TYPE_CHECKING:
        from gradio.components import Timer
        from gradio.components.base import Component

    
    def click(self,
        fn: Callable[..., Any] | None = None,
        inputs: Block | Sequence[Block] | set[Block] | None = None,
        outputs: Block | Sequence[Block] | None = None,
        api_name: str | None | Literal[False] = None,
        scroll_to_output: bool = False,
        show_progress: Literal["full", "minimal", "hidden"] = "full",
        show_progress_on: Component | Sequence[Component] | None = None,
        queue: bool | None = None,
        batch: bool = False,
        max_batch_size: int = 4,
        preprocess: bool = True,
        postprocess: bool = True,
        cancels: dict[str, Any] | list[dict[str, Any]] | None = None,
        every: Timer | float | None = None,
        trigger_mode: Literal["once", "multiple", "always_last"] | None = None,
        js: str | Literal[True] | None = None,
        concurrency_limit: int | None | Literal["default"] = "default",
        concurrency_id: str | None = None,
        show_api: bool = True,
    
        ) -> Dependency:
        """
        Parameters:
            fn: the function to call when this event is triggered. Often a machine learning model's prediction function. Each parameter of the function corresponds to one input component, and the function should return a single value or a tuple of values, with each element in the tuple corresponding to one output component.
            inputs: list of gradio.components to use as inputs. If the function takes no inputs, this should be an empty list.
            outputs: list of gradio.components to use as outputs. If the function returns no outputs, this should be an empty list.
            api_name: defines how the endpoint appears in the API docs. Can be a string, None, or False. If False, the endpoint will not be exposed in the api docs. If set to None, will use the functions name as the endpoint route. If set to a string, the endpoint will be exposed in the api docs with the given name.
            scroll_to_output: if True, will scroll to output component on completion
            show_progress: how to show the progress animation while event is running: "full" shows a spinner which covers the output component area as well as a runtime display in the upper right corner, "minimal" only shows the runtime display, "hidden" shows no progress animation at all
            show_progress_on: Component or list of components to show the progress animation on. If None, will show the progress animation on all of the output components.
            queue: if True, will place the request on the queue, if the queue has been enabled. If False, will not put this event on the queue, even if the queue has been enabled. If None, will use the queue setting of the gradio app.
            batch: if True, then the function should process a batch of inputs, meaning that it should accept a list of input values for each parameter. The lists should be of equal length (and be up to length `max_batch_size`). The function is then *required* to return a tuple of lists (even if there is only 1 output component), with each list in the tuple corresponding to one output component.
            max_batch_size: maximum number of inputs to batch together if this is called from the queue (only relevant if batch=True)
            preprocess: if False, will not run preprocessing of component data before running 'fn' (e.g. leaving it as a base64 string if this method is called with the `Image` component).
            postprocess: if False, will not run postprocessing of component data before returning 'fn' output to the browser.
            cancels: a list of other events to cancel when this listener is triggered. For example, setting cancels=[click_event] will cancel the click_event, where click_event is the return value of another components .click method. Functions that have not yet run (or generators that are iterating) will be cancelled, but functions that are currently running will be allowed to finish.
            every: continously calls `value` to recalculate it if `value` is a function (has no effect otherwise). Can provide a Timer whose tick resets `value`, or a float that provides the regular interval for the reset Timer.
            trigger_mode: if "once" (default for all events except `.change()`) would not allow any submissions while an event is pending. If set to "multiple", unlimited submissions are allowed while pending, and "always_last" (default for `.change()` and `.key_up()` events) would allow a second submission after the pending event is complete.
            js: optional frontend js method to run before running 'fn'. Input arguments for js method are values of 'inputs' and 'outputs', return should be a list of values for output components.
            concurrency_limit: if set, this is the maximum number of this event that can be running simultaneously. Can be set to None to mean no concurrency_limit (any number of this event can be running simultaneously). Set to "default" to use the default concurrency limit (defined by the `default_concurrency_limit` parameter in `Blocks.queue()`, which itself is 1 by default).
            concurrency_id: if set, this is the id of the concurrency group. Events with the same concurrency_id will be limited by the lowest set concurrency_limit.
            show_api: whether to show this event in the "view API" page of the Gradio app, or in the ".view_api()" method of the Gradio clients. Unlike setting api_name to False, setting show_api to False will still allow downstream apps as well as the Clients to use this event. If fn is None, show_api will automatically be set to False.
        
        """
        ...