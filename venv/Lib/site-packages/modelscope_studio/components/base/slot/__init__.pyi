from __future__ import annotations

from typing import Any

from ....utils.dev import ModelScopeLayoutComponent, resolve_frontend_dir

from gradio.events import Dependency

class ModelScopeSlot(ModelScopeLayoutComponent):
    """
    """
    EVENTS = []

    def __init__(self,
                 value: str = '',
                 params_mapping: str | None = None,
                 *,
                 skip_context_value: bool = True,
                 as_item: str | None = None,
                 _internal: None = None,
                 visible: bool = True,
                 render: bool = True,
                 **kwargs):
        super().__init__(visible=visible,
                         render=render,
                         as_item=as_item,
                         **kwargs)
        self.params_mapping = params_mapping
        self.skip_context_value = skip_context_value
        if isinstance(self.parent, ModelScopeSlot):
            self.value = f"{self.parent.value}.{value}"
        else:
            self.value = value

    FRONTEND_DIR = resolve_frontend_dir("slot", type='base')

    @property
    def skip_api(self):
        return True

    def preprocess(self, payload: str) -> str:
        return payload

    def postprocess(self, value: str) -> str:

        return value

    def example_payload(self) -> Any:
        return None

    def example_value(self) -> Any:
        return None
    from typing import Callable, Literal, Sequence, Any, TYPE_CHECKING
    from gradio.blocks import Block
    if TYPE_CHECKING:
        from gradio.components import Timer
        from gradio.components.base import Component